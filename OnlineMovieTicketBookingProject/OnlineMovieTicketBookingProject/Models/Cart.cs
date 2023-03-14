namespace OnlineMovieTicketBookingProject.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public string seatNo { get; set; }
        public string UserID { get; set; }
        public DateTime date { get; set; }
        public int Amout { get; set; }
        public int MovieId { get; set; }
    }
}
