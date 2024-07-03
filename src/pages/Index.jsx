import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gray-800 text-white">
        <img
          src="https://placehold.co/1920x1080"
          alt="Hero Background"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">Welcome to Our SaaS Product</h1>
          <p className="mt-4 text-xl">The best solution for your business needs</p>
          <Button className="mt-8">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <div className="grid gap-8 mt-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center">Pricing</h2>
        <div className="grid gap-8 mt-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$10/month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$20/month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$30/month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center">About Us</h2>
        <div className="flex flex-col items-center mt-8 md:flex-row">
          <img
            src="https://placehold.co/600x400"
            alt="About Us"
            className="w-full md:w-1/2"
          />
          <div className="mt-8 md:mt-0 md:ml-8">
            <p>
              We are a company dedicated to providing the best SaaS solutions for your business. Our team of experts is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-8 space-y-4">
          <Input placeholder="Name" {...register("name")} />
          <Input type="email" placeholder="Email" {...register("email")} />
          <Textarea placeholder="Message" {...register("message")} />
          <Button type="submit">Submit</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SaaS Company. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;