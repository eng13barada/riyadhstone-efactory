'use client';

import React, { useState } from 'react';
import { Upload, FileText, Brain, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnboardingPage() {
    const [analyzing, setAnalyzing] = useState(false);
    const [complete, setComplete] = useState(false);

    const handleUpload = () => {
        setAnalyzing(true);
        // Simulate AI analysis
        setTimeout(() => {
            setAnalyzing(false);
            setComplete(true);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-brand-light dark:bg-neutral-900 text-neutral-900 dark:text-white p-8 font-sans">
            <div className="max-w-3xl mx-auto">

                <header className="mb-12">
                    <h1 className="text-3xl font-bold mb-2">Smart Factory Onboarding</h1>
                    <p className="text-neutral-500 dark:text-neutral-400">
                        Upload your factory master list or assets. Our AI will analyze your capabilities and generate a transformation roadmap.
                    </p>
                </header>

                <div className="bg-white dark:bg-black border border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl p-12 text-center relative overflow-hidden">

                    {!analyzing && !complete && (
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-gold">
                                <Upload className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Upload Master Asset File</h3>
                            <p className="text-sm text-neutral-500 mb-8 max-w-sm">
                                Supported formats: PDF, XLSX, ZIP. Max size 50MB.
                            </p>
                            <button
                                onClick={handleUpload}
                                className="bg-brand-gold hover:bg-brand-gold/90 text-white font-bold py-3 px-8 rounded-full transition-all"
                            >
                                Select File to Analyze
                            </button>
                        </div>
                    )}

                    {analyzing && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative mb-6">
                                <Brain className="w-16 h-16 text-brand-gold animate-pulse" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Loader2 className="w-24 h-24 text-brand-gold/30 animate-spin" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI Analyzing Assets...</h3>
                            <p className="text-sm text-neutral-500">
                                Classifying machinery, identifying maturity gaps, and generating roadmap.
                            </p>
                        </motion.div>
                    )}

                    {complete && (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Analysis Complete</h3>
                            <p className="text-sm text-neutral-500 mb-8 max-w-sm">
                                We have generated a 12-month transformation roadmap for your facility.
                            </p>
                            <button className="border border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-full hover:bg-brand-gold hover:text-white transition-all">
                                View Generated Roadmap
                            </button>
                        </motion.div>
                    )}

                </div>

            </div>
        </div>
    );
}
