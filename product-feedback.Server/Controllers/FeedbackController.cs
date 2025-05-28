using Microsoft.AspNetCore.Mvc;
using product_feedback.Server.Models;

namespace product_feedback.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FeedbackController : ControllerBase
    {
        private readonly ILogger<FeedbackController> _logger;
        public FeedbackController(ILogger<FeedbackController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Feedback> Get()
        {
            
        }
    }
}