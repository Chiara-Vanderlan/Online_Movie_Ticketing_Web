
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
//using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using OnlineMovieTicketBookingProject.Models;
using OnlineMovieTicketBookingProject.Data;

namespace OnlineMovieTicketBookingProject.Data
{
    public class ApplicationDbContext : DbContext
    {
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
            : base(options) { }

        public DbSet<BookingTable> BookingTable { get; set; }
        public DbSet<Cart> Cart { get; set; }
        public DbSet<MovieDetails> MovieDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
