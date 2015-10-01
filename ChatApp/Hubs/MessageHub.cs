using Microsoft.AspNet.SignalR; 
using Microsoft.AspNet.SignalR.Hubs;

namespace ChatApp.Hubs
{
    [HubName("messages")]
    public class MessageHub : Hub
    {
    }
}