using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CaseStudy.DAL.DomainClasses
{
    public class Product
    {

        public string? Id { get; set; }


        
        [ForeignKey("BrandId")]
        public Brand? Brand { get; set; }


        [Required]
        public int? BrandId { get; set; }


        [Required]
        public byte[]? Timer { get; set; }


        [Required]
        public string? ProductName { get; set; }


        [Required]
        public string? GraphicName { get; set; }


        [Required]
        [Column(TypeName = "money")]
        public decimal CostPrice { get; set; }


        [Required]        
        [Column(TypeName = "money")]
        public decimal MSRP { get; set; }


        [Required]        
        public int QtyOnHand { get; set; }


        [Required]
        public int QtyOnBackOrder { get; set; }


        [Required]
        [MaxLength(2000, ErrorMessage ="Description must be less than 2000 characters")]
        public string? Description { get; set; }
        
        
        
        
    }
}
