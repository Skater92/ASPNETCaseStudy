﻿using Microsoft.EntityFrameworkCore;
using CaseStudy.DAL.DomainClasses;
using CaseStudyAPI.DAL.DomainClasses;

namespace CaseStudy.DAL
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public virtual DbSet<Product>? Products { get; set; }
        public virtual DbSet<Brand>? Brands { get; set; }
        public virtual DbSet<Customer>? Customer { get; set; }

        public virtual DbSet<Order>? Orders { get; set; }

        public virtual DbSet<OrderLineItem>? OrdersLineItem { get; set; }



    }    
}
