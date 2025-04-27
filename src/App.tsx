
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { ArrowRight, CheckCircle, MessageSquare, FileText, Shield, Menu, X } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-900">LegalAssist<span className="text-blue-600">AI</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-700 hover:text-blue-600 transition-colors">FAQ</a>
            <Button variant="outline" className="mr-2">Log In</Button>
            <Button>Get Started</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Features</a>
              <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>How It Works</a>
              <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Pricing</a>
              <a href="#faq" className="text-slate-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>FAQ</a>
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" className="w-full">Log In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 font-display mb-6 leading-tight">
              Legal assistance shouldn't be a luxury
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed">
              Create legally sound contracts and documents with our AI assistant. 
              No expensive lawyer fees, just affordable legal help when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Try For Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Simple Contracts</h3>
                <p className="text-slate-600 text-center">Create legally binding agreements in minutes, not hours</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Legal Guidance</h3>
                <p className="text-slate-600 text-center">Get answers to common legal questions without the high fees</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Peace of Mind</h3>
                <p className="text-slate-600 text-center">All documents reviewed for legal compliance and accuracy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-display mb-4">
                Legal help made simple and affordable
              </h2>
              <p className="text-lg text-slate-700">
                Our AI-powered platform helps you create, understand, and manage legal documents without the complexity or cost.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-blue-600 rounded-2xl p-1">
                  <div className="bg-white rounded-xl p-4 h-[400px] overflow-hidden">
                    <div className="bg-slate-100 rounded-lg p-4 h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <div className="ml-2 text-xs text-slate-500">LegalAssistAI - Contract Creator</div>
                      </div>
                      <div className="flex-1 overflow-y-auto">
                        <div className="mb-4 bg-blue-100 rounded-lg p-3 text-blue-800 text-sm">
                          What type of contract do you need help with today?
                        </div>
                        <div className="mb-4 bg-slate-200 rounded-lg p-3 text-slate-800 text-sm ml-auto max-w-[80%]">
                          I need a simple freelance contract for graphic design work.
                        </div>
                        <div className="mb-4 bg-blue-100 rounded-lg p-3 text-blue-800 text-sm">
                          Great! I'll help you create a freelance graphic design contract. Let me ask a few questions:
                          <br /><br />
                          1. What's your full name (the freelancer)?<br />
                          2. What's the client's name or company?<br />
                          3. What's the project scope and deliverables?<br />
                          4. What's your rate (hourly or fixed price)?<br />
                          5. What's the project timeline?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-blue-900 font-display mb-4">
                  Conversational Contract Creation
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  No more confusing legal templates. Our AI assistant guides you through creating contracts with simple questions in plain English.
                </p>
                <ul className="space-y-4">
                  {[
                    "Answer simple questions to generate custom contracts",
                    "Get explanations of legal terms in plain language",
                    "Edit and revise until it's perfect",
                    "Download as PDF or Word document"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-display mb-4">
                How LegalAssistAI works
              </h2>
              <p className="text-lg text-slate-700">
                Creating legal documents has never been easier. Our AI guides you through every step of the process.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Tell us what you need",
                    description: "Choose from our library of legal documents or describe what you need in simple terms."
                  },
                  {
                    step: "2",
                    title: "Answer simple questions",
                    description: "Our AI will ask you relevant questions to customize the document to your specific situation."
                  },
                  {
                    step: "3",
                    title: "Get your document",
                    description: "Review, edit if needed, and download your legally sound document ready for use."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 relative">
                    <div className="absolute -top-5 -left-5 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 mt-2">{item.title}</h3>
                    <p className="text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-display mb-4">
                Legal documents you can create
              </h2>
              <p className="text-lg text-slate-700">
                From simple agreements to complex contracts, our AI can help with a wide range of legal documents.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="business" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="business">Business</TabsTrigger>
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="property">Property</TabsTrigger>
                </TabsList>
                <TabsContent value="business" className="animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Freelance Contracts",
                      "Non-Disclosure Agreements",
                      "Service Agreements",
                      "Employment Contracts",
                      "Partnership Agreements",
                      "Terms of Service",
                      "Privacy Policies",
                      "Consulting Agreements",
                      "Independent Contractor Agreements"
                    ].map((item, index) => (
                      <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer border-blue-100 hover:border-blue-300">
                        <div className="font-medium text-blue-900">{item}</div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="personal" className="animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Last Will and Testament",
                      "Power of Attorney",
                      "Roommate Agreements",
                      "Child Custody Agreements",
                      "Prenuptial Agreements",
                      "Personal Loan Agreements",
                      "Healthcare Directives",
                      "Pet Custody Agreements",
                      "Debt Settlement Agreements"
                    ].map((item, index) => (
                      <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer border-blue-100 hover:border-blue-300">
                        <div className="font-medium text-blue-900">{item}</div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="property" className="animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Residential Lease Agreements",
                      "Commercial Lease Agreements",
                      "Property Purchase Agreements",
                      "Sublease Agreements",
                      "Rental Applications",
                      "Property Management Agreements",
                      "Real Estate Purchase Contracts",
                      "Eviction Notices",
                      "Property Inspection Reports"
                    ].map((item, index) => (
                      <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer border-blue-100 hover:border-blue-300">
                        <div className="font-medium text-blue-900">{item}</div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-display mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-lg text-slate-700">
                Choose the plan that works for your needs. No hidden fees or surprises.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "$9.99",
                  description: "Perfect for occasional legal document needs",
                  features: [
                    "3 documents per month",
                    "Basic document types",
                    "Email support",
                    "Document storage for 1 year",
                    "PDF and Word downloads"
                  ]
                },
                {
                  name: "Professional",
                  price: "$19.99",
                  description: "Ideal for freelancers and small businesses",
                  features: [
                    "10 documents per month",
                    "All document types",
                    "Priority email support",
                    "Document storage for 3 years",
                    "PDF, Word, and editable formats",
                    "Document revision history"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$49.99",
                  description: "For businesses with regular legal document needs",
                  features: [
                    "Unlimited documents",
                    "All document types",
                    "Priority phone and email support",
                    "Unlimited document storage",
                    "All download formats",
                    "Document revision history",
                    "Custom document templates",
                    "Team member access"
                  ]
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-sm border ${plan.popular ? 'border-blue-400 ring-2 ring-blue-400 ring-opacity-20' : 'border-slate-200'} p-8 relative`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-blue-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">/month</span>
                  </div>
                  <p className="text-slate-700 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto text-center mt-12">
              <p className="text-slate-600">
                All plans come with a 7-day free trial. No credit card required to start.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-display mb-4">
                What our users say
              </h2>
              <p className="text-lg text-slate-700">
                Join thousands of individuals and small businesses who trust LegalAssistAI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "I needed a freelance contract quickly and couldn't afford a lawyer. LegalAssistAI helped me create a professional contract in under 30 minutes.",
                  author: "Sarah J.",
                  role: "Freelance Designer"
                },
                {
                  quote: "As a small business owner, legal documents were always intimidating. This platform makes it simple and affordable to create the documents I need.",
                  author: "Michael T.",
                  role: "Small Business Owner"
                },
                {
                  quote: "I used LegalAssistAI to create a rental agreement for my property. The process was straightforward and the document was comprehensive.",
                  author: "David L.",
                  role: "Property Owner"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 border-blue-100">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-slate-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-blue-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-display mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-slate-700">
                Have questions? We've got answers.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Are the documents legally binding?",
                    answer: "Yes, the documents created with LegalAssistAI are designed to be legally binding. However, legal requirements can vary by jurisdiction, so we recommend reviewing the document with a legal professional if you have specific concerns or complex situations."
                  },
                  {
                    question: "Can LegalAssistAI replace a lawyer?",
                    answer: "LegalAssistAI is designed to help with common legal documents and provide general information, but it's not a substitute for personalized legal advice from a licensed attorney. For complex legal matters or situations with significant legal implications, we recommend consulting with a lawyer."
                  },
                  {
                    question: "How secure is my information?",
                    answer: "We take security seriously. All data is encrypted both in transit and at rest. We don't share your information with third parties, and we have strict data protection policies in place to ensure your information remains confidential."
                  },
                  {
                    question: "Can I edit my documents after creating them?",
                    answer: "Yes, you can edit your documents at any time. Our platform saves your documents securely, allowing you to make changes whenever needed. The Professional and Enterprise plans also include document revision history."
                  },
                  {
                    question: "What if I need help using the platform?",
                    answer: "We offer support via email for all plans, with priority support for Professional and Enterprise users. Our help center also contains guides and tutorials to help you navigate the platform and create documents effectively."
                  },
                  {
                    question: "Can I cancel my subscription?",
                    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your current billing period. We don't offer refunds for partial months."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-blue-900 hover:text-blue-700">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-slate-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Ready to create your first legal document?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of users who are saving time and money with LegalAssistAI.
                Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800 text-lg px-8 py-6">
                      Request Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Request a Demo</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and our team will contact you to schedule a personalized demo.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input id="email" type="email" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="company" className="text-right">
                          Company
                        </Label>
                        <Input id="company" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-right">
                          Message
                        </Label>
                        <Textarea id="message" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Submit Request</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 font-display mb-4">
                Stay updated with legal tips and news
              </h2>
              <p className="text-slate-700 mb-8">
                Subscribe to our newsletter for legal tips, product updates, and helpful resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">LegalAssist<span className="text-blue-400">AI</span></span>
              </div>
              <p className="text-slate-400 mb-4">
                Making legal assistance accessible and affordable for everyone.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Document Library</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Legal Guides</a></li>
                <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} LegalAssistAI. All rights reserved.</p>
            <p className="mt-2">
              LegalAssistAI provides legal document templates and information for educational purposes only. 
              It is not a substitute for professional legal advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App