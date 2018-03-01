﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return context.Questions;
            /*return new Models.Question[]
            {
               new Models.Question(){ Text="hello"},                new Models.Question(){ Text="hi"}
            };*/
                //{ "value1", "value2" };
        }

        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {
            //context.Questions.Add( new Models.Question() { Text="text1"}            );
            context.Questions.Add(question);
            context.SaveChanges();  
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Models.Question question)
        {
        }
    }
}