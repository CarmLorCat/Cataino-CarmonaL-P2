using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Posts.Any())
            {
                var Post = new List<Post>
                {
                    new Post{
                        Title= "First post",
                        Body = "loerea, adfas dfda, ddd , adfef, dfadf, dadfefad, eefafe",
                        Date= DateTime.Now.AddDays(-10)
                    },
                    new Post{
                        Title= "Second post",
                        Body = "Eadfd, kafda, efreafed,eafsdc.",
                        Date= DateTime.Now.AddDays(-10)
                    },
                    new Post{
                        Title= "Third post",
                        Body = "Ddadg adfar adf dfdadadfas ,adfdfd adfs.",
                        Date= DateTime.Now.AddDays(-10)
                    },
                };
                context.Posts.AddRange(Post);
                context.SaveChanges();
            }
        }
    }
}