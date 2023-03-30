using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ShoeboxDynamic.Models;

namespace ShoeboxDynamic.Pages
{
    public class mens_formalsModel : PageModel
    {
        public readonly AppDataContext _db;
        public mens_formalsModel(AppDataContext db, List<Products> products)
        {
            _db = db;
            
        }

        public List<Products> Products { get; set; }
        public async Task OnGetAsync()
        {
            Products = _db.Products.ToList();
            
            foreach (var product in Products) {
            _db.Products.Add(product);
            }
            await _db.SaveChangesAsync();
        }
    }
}
