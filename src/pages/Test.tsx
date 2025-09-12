import React from 'react';

const Test = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold text-center mb-8">FluxMQ Test Page</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Basic Test</h2>
          <p className="text-muted-foreground mb-4">
            If you can see this page, the basic React setup is working.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary">Primary Color Test</h3>
              <p>This should have a blue background.</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-lg">
              <h3 className="font-semibold text-accent">Accent Color Test</h3>
              <p>This should have a cyan background.</p>
            </div>
            <div className="p-4 bg-gradient-primary rounded-lg text-primary-foreground">
              <h3 className="font-semibold">Gradient Test</h3>
              <p>This should have a gradient background.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
