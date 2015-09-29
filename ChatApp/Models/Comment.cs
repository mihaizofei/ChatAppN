using System.Net.Mime;

namespace ChatApp.Models
{
    public class Comment
    {
        public string Author { get; set; }
        public string Text { get; set; }
        public string Date { get; set; }
        public string Image { get; set; }
    }
}