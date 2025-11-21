import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export function Register() {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm ">
        <CardHeader className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Register to your account</CardTitle>
              <CardDescription>
                Enter your email below to Register to your account
              </CardDescription>
            </div>
            <Button variant="link" onClick={() => navigate("/login")}>
              Log In
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input id="name" type="name" placeholder="Name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Register
          </Button>
          <Button variant="outline" className="w-full">
            <FcGoogle />
            Continue with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
