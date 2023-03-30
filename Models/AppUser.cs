using Microsoft.AspNetCore.Identity;

namespace ShoeboxDynamic.Models
{
	public class AppUser : IdentityUser

	{
		public string FullName { get; set; }
		public string Email { get; set; }
		public string Password { get; set; }
	}
}
