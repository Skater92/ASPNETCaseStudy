using CaseStudy.DAL;
using CaseStudy.DAL.DAO;
using CaseStudy.DAL.DomainClasses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CaseStudy.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        readonly AppDbContext _db;
        public CategoryController(AppDbContext context)
        {
            _db = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Brand>>> Index()
        {
            BrandDAO dao = new(_db);
            List<Brand> allBrands = await dao.GetAll();
            return allBrands;
        }
    }

}
