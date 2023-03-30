using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ShoeboxDynamic.Models;

namespace ShoeboxDynamic.Pages
{
    public class womens_formalsModel : PageModel
    {
        public readonly AppDataContext _db;
        public womens_formalsModel(AppDataContext db, List<Products> products)
        {
            _db = db;
            Products = products;
        }

        public List<Products> Products { get; set; }
        public void OnGet()
        {
            Products = _db.Products.ToList();
        }
    }
}
