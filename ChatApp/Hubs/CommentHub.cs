using Microsoft.AspNet.SignalR; 
using Microsoft.AspNet.SignalR.Hubs;

namespace ChatApp.Hubs
{
    [HubName("comments")]
    public class CommentHub : Hub
    {
        public void Subscribe(string customerId)
        {
            Groups.Add(Context.ConnectionId, customerId);
        }

        public void Unsubscribe(string customerId)
        {
            Groups.Remove(Context.ConnectionId, customerId);
        }
    }
}