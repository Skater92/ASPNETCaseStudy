using CaseStudy.DAL;
using CaseStudy.DAL.DAO;
using CaseStudy.DAL.DomainClasses;
using Microsoft.AspNetCore.Mvc;
using CaseStudy.Helpers;
using Microsoft.AspNetCore.Authorization;

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
    }
}
