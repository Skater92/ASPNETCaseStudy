using CaseStudy.DAL;
using CaseStudy.DAL.DAO;
using CaseStudy.DAL.DomainClasses;
using Microsoft.AspNetCore.Mvc;
using CaseStudy.Helpers;
using Microsoft.AspNetCore.Authorization;
using CaseStudyAPI.DAL.DomainClasses;

namespace CaseStudy.Controllers
{
    
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        readonly AppDbContext _ctx;
        public OrderController(AppDbContext context) // injected here
        {
             _ctx = context;            
        }
        [HttpPost]
        [Produces("application/json")]
        public async Task<ActionResult<string>> Index(CartHelper helper)
        {
            string retVal;
            try
            {
                CustomerDAO cDao = new(_ctx);
                Customer? trayOwner = await cDao.GetByEmail(helper.Email);
                OrderDAO oDao = new(_ctx);
                int orderId = await oDao.AddCart(trayOwner!.Id, helper.Selections!);             

                retVal = orderId > 0
                ? "Cart " + orderId + " saved!"
               : "Cart not saved";

                

            }
            catch (Exception ex)
            {
                retVal = "Cart not saved " + ex.Message;
            }
            return retVal;
        }

        [Route("{email}")]
        [HttpGet]
        
        public async Task<ActionResult<List<Order>>> List(string email)
        {
            List<Order> orders; ;
            CustomerDAO cDao = new(_ctx);
            Customer? cartOwner = await cDao.GetByEmail(email);
            OrderDAO oDao = new(_ctx);
            orders = await oDao.GetAll(cartOwner!.Id);
            return orders;
        }

        [Route("{orderid}/email")]
        [HttpGet]
       
        public async Task<ActionResult<List<CartDetailsHelper>>> GetOrderDetails(int orderid, string email)
        {
            OrderDAO oDao = new(_ctx);
            return await oDao.GetOrderDetails(orderid, email);
        }

    }
}
