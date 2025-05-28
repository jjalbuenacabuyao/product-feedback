namespace product_feedback.Server.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required Category Category { get; set; }
        public required int Upvotes { get; set; }
        public User[] UsersWhoUpvoted { get; set; } = [];
        public required Status Status { get; set; }
        public required string Description { get; set; }
        public Comment[] Comments { get; set; } = [];
    }
}