namespace product_feedback.Server.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public required string Content { get; set; }
        public required User User { get; set; }
        public Comment[] Replies { get; set; } = [];
    }
}