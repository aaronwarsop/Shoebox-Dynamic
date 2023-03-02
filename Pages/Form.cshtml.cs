using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Shoebox.Models;
using System.Xml.Linq;

namespace Shoebox.Pages
{
    public class FormModel : PageModel
    {
        public List<Product> products { get; set; }

        public void OnGet()
        {
            products = new List<Product>
            {
                new Product()
                {
                    Id = "01",
                    Name = "Air Jordans Red",
                    Price = 99.99
                },
                new Product() {
                    Id = "02",
                    Name = "Air Jordans Red",
                    Price = 99.99
                }
            };
        }
    }
}
