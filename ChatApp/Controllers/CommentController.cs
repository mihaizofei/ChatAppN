﻿using System.Net;
using System.Net.Http;
using ChatApp.Hubs;
using ChatApp.Models;

namespace ChatApp.Controllers
{
    public class CommentController : SignalRBase<CommentHub>
    {
        // POST api/<controller> 
        public HttpResponseMessage Post(Comment item) 
        {
            if (item == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            } 
            Hub.Clients.All.newComment(item); 
            return Request.CreateResponse(HttpStatusCode.Created, item); 
        }
    }
}