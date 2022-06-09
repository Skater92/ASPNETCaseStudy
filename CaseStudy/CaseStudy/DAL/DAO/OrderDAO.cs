using CaseStudy.DAL.DomainClasses;
using CaseStudy.Helpers;
using CaseStudyAPI.DAL.DomainClasses;
using Microsoft.EntityFrameworkCore;

namespace CaseStudy.DAL.DAO
{
    public class OrderDAO
    {

        private readonly AppDbContext _db;

        public OrderDAO(AppDbContext ctx)
        {
            _db = ctx;
        }

        public async Task<int> AddCart(int custid, CartSelectionHelper[] selections)
        {
            int cartId = -1;

            using (var _trans = await _db.Database.BeginTransactionAsync())
            {
                try
                {
                    Order order = new ();
                    order.CustomerId = custid;
                    order.OrderDate = DateTime.Now;
                    order.OrderAmount = 0.0M;
                     
                    
                    foreach(CartSelectionHelper selection in selections)
                    {
                        try
                        {
                            OrderLineItem oItem = new();
                            oItem.QtyOrdered = selection.Qty;
                            oItem.ProductId = selection.product!.Id;
                            oItem.OrderId = order.Id;
                            order.OrderAmount = (selection.product!.CostPrice * selection.product!.MSRP);
                                                        
                        }
                        catch (Exception ex)
                        {                            
                            Console.WriteLine("\n\n\nSHE'S BORKED JIM");
                            Console.WriteLine(ex.Message);
                            Console.WriteLine("@OrderDAO Line 35\n\n\n");
                        }
                    }
                    await _db.Orders!.AddAsync(order);
                    await _db.SaveChangesAsync();

                    foreach (CartSelectionHelper selection in selections)
                    {
                        OrderLineItem oItem = new();
                        oItem.QtyOrdered = selection.Qty;
                        oItem.ProductId = selection.product!.Id;
                        oItem.OrderId = order.Id;
                        oItem.SellingPrice = (selection.product!.CostPrice * selection.product!.MSRP);
                        try
                        {
                            if (oItem.QtyOrdered > selection.product!.QtyOnHand)
                            {
                                int temp = oItem.QtyOrdered - selection.product!.QtyOnHand;
                                oItem.QtyOrdered = selection.Qty;
                                oItem.QtySold = selection.product!.QtyOnHand;
                                selection.product!.QtyOnHand = 0;
                                Console.WriteLine("\n\nvalue in Temp is: " + temp);
                                oItem.QtyBackOrdered = temp;
                                
                            }
                            else
                            {
                                oItem.QtySold = selection.Qty;
                                oItem.QtyOrdered = selection.Qty;
                                oItem.QtyBackOrdered = 0;
                            }
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine(ex.Message);
                            Console.WriteLine("\n\n\nIS BORKED JIM\n\n\n");
                        }
                        await _db.OrdersLineItem!.AddAsync(oItem);
                        await _db.SaveChangesAsync();
                    }
                    await _trans.CommitAsync();
                    cartId = order.Id;
                    
                    foreach (CartSelectionHelper selection in selections)
                    {
                        OrderLineItem oItem = new();
                        Product prod = new();
                        prod.Id = selection.product!.Id;
                        oItem.QtyOrdered = selection.Qty;
                        try
                        {
                            if(oItem.QtyOrdered > selection.product!.QtyOnHand)
                            {
                                prod.QtyOnHand = 0;
                                prod.QtyOnBackOrder += (oItem.QtyOrdered - selection.product!.QtyOnHand);
                                prod.BrandId = selection.product!.BrandId;
                                prod.Timer = selection.product!.Timer;
                                prod.ProductName = selection.product!.ProductName;  
                                prod.GraphicName = selection.product!.GraphicName;
                                prod.CostPrice = selection.product!.CostPrice;
                                prod.MSRP = selection.product!.MSRP;
                                prod.Description = selection.product!.Description;
                            }
                            else
                            {
                                prod.QtyOnHand -= selection.Qty;
                            }
                        }
                        catch(Exception ex) 
                        {
                            Console.WriteLine("\n\nprod Object Update FAIL");
                            Console.WriteLine(ex.Message);
                            Console.WriteLine("\n\n");
                        }
                        try
                        {
                             _db.Products!.Update(prod);
                            await _db.SaveChangesAsync();
                        }
                        catch(Exception ex)
                        {
                            Console.WriteLine("\n\nPost to Product db FAIL");
                            Console.WriteLine(ex.Message);
                            Console.WriteLine("\n\n");
                        }
                    }
                   

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await _trans.RollbackAsync();
                }
            }
            return cartId;
        }

        public async Task<List<Order>> GetAll(int id)
        {
            return await _db.Orders!.Where(order => order.CustomerId == id).ToListAsync<Order>();
        }

        public async Task<List<CartDetailsHelper>> GetOrderDetails(int tid, string email)
        {
            Customer? cust = _db.Customer!.FirstOrDefault(cust => cust.Email == email);
            List<CartDetailsHelper> allDetails = new();
            // LINQ way of doing INNER JOINS
            var results = from o in _db.Orders
                          join oli in _db.OrdersLineItem! on o.Id equals oli.OrderId
                          join p in _db.Products! on oli.ProductId equals p.Id
                          where (o.CustomerId == cust!.Id && o.Id == tid)
                          select new CartDetailsHelper
                          {
                              CartID = o.Id,
                              ProdID = p.Id,
                              ProdName = p.ProductName,
                              CustomerID = cust!.Id,
                              QtySo = oli.QtySold,
                              QtyOr = oli.QtyOrdered,
                              QtyBa = oli.QtyBackOrdered,
                              Ext = p.MSRP
                              
                          };
            allDetails = await results.ToListAsync();
            return allDetails;
        }


    }
}
