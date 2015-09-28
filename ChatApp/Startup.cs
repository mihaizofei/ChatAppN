using Microsoft.Owin;
using Owin;

namespace ChatApp
{
    [assembly: OwinStartup(typeof(ChatApp.Startup))]
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}