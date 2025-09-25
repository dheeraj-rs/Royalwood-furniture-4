'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Mail, Lock, User, Phone, ToggleLeft as Google, Facebook } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black/95 backdrop-blur-xl border border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Welcome to Royalwood
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="mt-6">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10">
            <TabsTrigger value="login" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/80">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    className="pl-10 pr-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-white/50 hover:text-white/80"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 text-white/70">
                  <input type="checkbox" className="rounded border-white/20 bg-white/10" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="text-yellow-400 hover:text-yellow-300">
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 mt-6">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white/80">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                    <Input
                      id="firstName"
                      placeholder="First name"
                      value={signupForm.firstName}
                      onChange={(e) => setSignupForm({...signupForm, firstName: e.target.value})}
                      className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white/80">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    value={signupForm.lastName}
                    onChange={(e) => setSignupForm({...signupForm, lastName: e.target.value})}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signupEmail" className="text-white/80">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                  <Input
                    id="signupEmail"
                    type="email"
                    placeholder="Enter your email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                    className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/80">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={signupForm.phone}
                    onChange={(e) => setSignupForm({...signupForm, phone: e.target.value})}
                    className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signupPassword" className="text-white/80">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                  <Input
                    id="signupPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                    className="pl-10 pr-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-white/50 hover:text-white/80"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white/80">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={signupForm.confirmPassword}
                    onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                    className="pl-10 pr-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-white/50 hover:text-white/80"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="text-sm">
                <label className="flex items-start space-x-2 text-white/70">
                  <input type="checkbox" className="rounded border-white/20 bg-white/10 mt-0.5" required />
                  <span>I agree to the <button type="button" className="text-yellow-400 hover:text-yellow-300">Terms of Service</button> and <button type="button" className="text-yellow-400 hover:text-yellow-300">Privacy Policy</button></span>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold"
              >
                {isLoading ? 'Creating account...' : 'Create Account'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <Separator className="bg-white/10" />
          <p className="text-center text-sm text-white/50 mt-4 mb-4">Or continue with</p>
          
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
              className="border-white/20 text-white hover:bg-white/10 hover:text-yellow-400"
            >
              <Google className="w-4 h-4 mr-2" />
              Google
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSocialLogin('facebook')}
              disabled={isLoading}
              className="border-white/20 text-white hover:bg-white/10 hover:text-yellow-400"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}