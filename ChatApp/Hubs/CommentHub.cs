using Microsoft.AspNet.SignalR; 
using Microsoft.AspNet.SignalR.Hubs;

namespace ChatApp.Hubs
{
    [HubName("comments")]
    public class CommentHub : Hub
    {
        
    }
}