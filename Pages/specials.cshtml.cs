using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ShoeboxDynamic.Models;

namespace ShoeboxDynamic.Pages
{
    public class specialsModel : PageModel
    {
        public readonly AppDataContext _db;
        public specialsModel(AppDataContext db, List<Products> products)
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
