using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> Post([FromBody]Models.Question question)
        {
            //context.Questions.Add( new Models.Question() { Text="text1"}            );
            context.Questions.Add(question);
            await context.SaveChangesAsync();

            return Ok(question);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Question questionData)
        {
            //var qestion = await context.Questions.SingleOrDefaultAsync(q=>q.ID ==id);
            if (id != questionData.ID)
                return BadRequest();

            context.Entry(questionData).State = EntityState.Modified;

            await context.SaveChangesAsync();
            return Ok(questionData);
        }
    }
}