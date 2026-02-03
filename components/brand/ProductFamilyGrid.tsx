'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Box, Droplets, Map, LandPlot, Footprints, Component } from 'lucide-react';
import { ProductFamily } from '@/types/core';

const families: { id: ProductFamily; name: string; description: string; icon: React.ElementType }[] = [
    {
        id: 'RiyadEx™',
        name: 'RiyadEx™',
        description: 'Architectural Facade Systems & Cladding',
        icon: Layers
    },
    {
        id: 'RiyadFloor™',
        name: 'RiyadFloor™',
        description: 'High-Traffic Flooring & Paving Solutions',
        icon: Map
    },
    {
        id: 'RiyadCiv™',
        name: 'RiyadCiv™',
        description: 'Civil Infrastructure & Kerb Systems',
        icon: LandPlot
    },
    {
        id: 'RiyadWet™',
        name: 'RiyadWet™',
        description: 'Water Management & Drainage Systems',
        icon: Droplets
    },
    {
        id: 'RiyadUrb™',
        name: 'RiyadUrb™',
        description: 'Urban Furniture & Custom Elements',
        icon: Box
    },
    {
        id: 'RiyadStep™',
        name: 'RiyadStep™',
        description: 'Precision Stair & Accessibility Units',
        icon: Footprints
    },
    {
        id: 'RiyadRaw™',
        name: 'RiyadRaw™',
        description: 'Certified Raw Slabs & Semi-Finished Supply',
        icon: Component
    },
];

export default function ProductFamilyGrid() {
    return (
        <section className="py-24 bg-brand-light dark:bg-black text-black dark:text-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">System-Based Solutions</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg">
                        We don't sell random stone. We engineer precise product families designed for specific architectural applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {families.map((family, i) => (
                        <motion.div
                            key={family.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-brand-gold/50 transition-all cursor-pointer shadow-sm hover:shadow-lg"
                        >
                            <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                                <family.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-gold transition-colors">{family.name}</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                {family.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
