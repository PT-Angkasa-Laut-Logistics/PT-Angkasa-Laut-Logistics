"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Download, Eye } from "lucide-react";

export default function PdfViewer() {
  const [showPdf, setShowPdf] = useState(false);
  
  // For demo purposes, we're using a sample PDF URL
  // In a real application, this would be the actual company profile PDF
  const pdfUrl = "https://africau.edu/images/default/sample.pdf";
  
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6 bg-slate-50 dark:bg-slate-900">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-4">
            <FileText className="h-10 w-10 text-blue-700 dark:text-blue-300" />
          </div>
          
          <div className="flex-grow text-center sm:text-left">
            <h3 className="text-xl font-bold mb-2">Company Profile</h3>
            <p className="text-muted-foreground mb-4">
              Download our detailed company profile to learn more about our history, values, and product offerings.
            </p>
            
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <Button onClick={() => setShowPdf(true)} className="flex items-center gap-2">
                <Eye className="h-4 w-4" /> View Profile
              </Button>
              
              <a href={pdfUrl} download="Advance_Lab_Global_Profile.pdf">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download PDF
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        {showPdf && (
          <div className="mt-8 border border-border rounded-lg overflow-hidden">
            <div className="bg-card px-4 py-2 border-b border-border flex justify-between items-center">
              <h4 className="font-medium">Company Profile Preview</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPdf(false)}
              >
                Close
              </Button>
            </div>
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              className="w-full h-[500px]"
              title="Company Profile"
            />
          </div>
        )}
      </Card>
    </div>
  );
}