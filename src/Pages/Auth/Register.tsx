import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";
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
import { useAuth } from "@/Context/AuthProvider";
import { updateProfile } from "firebase/auth";

type Input = {
  name: string;
  email: string;
  password: string;
  imageURL: string;
};

export function Register() {
  const navigate = useNavigate();
  const { createUser, googleLogin, user } = useAuth();
  const { handleSubmit, register } = useForm<Input>();
  const handleRegister: SubmitHandler<Input> = async (data) => {
    console.log(data);
    try {
      await createUser(data.email, data.password);
      if (user) {
        await updateProfile(user, {
          displayName: data.name,
          photoURL: data.imageURL,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const res = await googleLogin();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm ">
        <form onSubmit={handleSubmit(handleRegister)}>
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
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="Name"
                  required
                  {...register("name", { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" {...register("imageURL")} />
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
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Register
            </Button>
            <Button
              onClick={handleGoogleRegister}
              variant="outline"
              className="w-full"
            >
              <FcGoogle />
              Continue with Google
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
