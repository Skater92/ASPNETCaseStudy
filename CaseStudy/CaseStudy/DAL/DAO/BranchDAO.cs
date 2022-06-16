using CaseStudy.DAL.DomainClasses.CaseStudy.DAL.DomainClasses;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace CaseStudy.DAL.DAO
{
    public class BranchDAO
    {
        private readonly AppDbContext _db;
        public BranchDAO(AppDbContext ctx)
        {
            _db = ctx;
        }

        public async Task<List<Branch>?> GetThreeClosestBranches(float? lat, float? lon)
        {
            List<Branch>? branchDetails = null;
            try
            {
                var latParam = new SqlParameter("@lat", lat);
                var lonParam = new SqlParameter("@lon", lon);
                var query = _db.Branches?.FromSqlRaw("dbo.pGetThreeClosestStores @lat, @lon", latParam,
                lonParam);
                branchDetails = await query!.ToListAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return branchDetails;
        }

    }
}
