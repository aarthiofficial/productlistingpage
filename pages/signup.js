import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // This is just a placeholder, you'd save to a real DB in a full app
    if (e.target.username.value && e.target.password.value) {
      alert("User registered (demo)");
      router.push("/signin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <input name="username" placeholder="Username" className="w-full p-2 border mb-2" required />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 border mb-4" required />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
