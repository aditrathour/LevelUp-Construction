import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

const App = () => {
    const [logoUrl, setLogoUrl] = useState<string | null>(null);
    const [aboutImageUrl, setAboutImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const generateLogo = async () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const response = await ai.models.generateImages({
                    model: 'imagen-4.0-generate-001',
                    prompt: 'A highly minimalist and abstract logo for "LevelUp Construction", an electrical equipment supplier. The design should be clean, modern, and avoid literal symbols like arrows or sparks. Focus on elegant geometric shapes that subtly suggest circuitry or growth. Use a sophisticated color palette of dark navy blue and a single, sharp accent of gold. The logo must be on a transparent background for versatility.',
                    config: {
                      numberOfImages: 1,
                      outputMimeType: 'image/png',
                      aspectRatio: '1:1',
                    },
                });

                const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
                const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
                setLogoUrl(imageUrl);
            } catch (error) {
                console.error("Failed to generate logo:", error);
            }
        };
        
        const generateAboutImage = async () => {
             try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const response = await ai.models.generateImages({
                    model: 'imagen-4.0-generate-001',
                    prompt: 'A professional, clean, and modern flat vector illustration representing electrical engineering. The illustration should depict a blueprint schematic with glowing circuits in gold on a dark navy blue background. The style should be sophisticated, minimalist, and convey trust and precision. No text.',
                    config: {
                      numberOfImages: 1,
                      outputMimeType: 'image/png',
                      aspectRatio: '1:1',
                    },
                });

                const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
                const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
                setAboutImageUrl(imageUrl);
            } catch (error) {
                console.error("Failed to generate about image:", error);
            }
        };

        generateLogo();
        generateAboutImage();
    }, []);

    return (
        <>
            <header>
                <div className="header-content">
                    <div className="logo">
                       {logoUrl ? (
                            <img src={logoUrl} alt="LevelUp Construction Logo" className="logo-img" />
                        ) : (
                            <div className="logo-placeholder" />
                        )}
                    </div>
                    <div className="header-text">
                        <div className="company-name">LevelUp Construction</div>
                        <p className="header-tagline">Powering Your Projects with Quality Electrical Supplies</p>
                    </div>
                </div>
            </header>

            <section className="hero" aria-labelledby="hero-heading">
                 {logoUrl ? (
                    <img src={logoUrl} alt="LevelUp Construction Logo" className="hero-logo-img" />
                 ) : (
                    <h1 id="hero-heading" className="visually-hidden">LevelUp Construction</h1>
                 )}
                 <p className="tagline">Powering Your Projects with Quality Electrical Supplies</p>
            </section>

            <main className="container">
                <div className="grid-container">
                    <section className="card about-card" aria-labelledby="about-heading">
                       <div>
                            <h3 id="about-heading">Your Trusted Partner in Electrical Supplies</h3>
                            <p>
                                LevelUp Construction is a leading supplier of high-quality electrical equipment. We are dedicated to powering construction projects of all sizes with reliable products and exceptional service.
                            </p>
                            <p>
                                Directed by <strong>Naman Pratap Singh</strong>, we bring expertise, commitment, and a promise of excellence to every client relationship.
                            </p>
                       </div>
                        <div className="about-image-container" aria-hidden="true">
                             {aboutImageUrl ? (
                                <img src={aboutImageUrl} alt="Electrical engineering schematic" className="about-image" />
                             ) : (
                                <div className="image-placeholder" />
                             )}
                        </div>
                    </section>
                    
                    <div>
                        <h2 className="section-title">Our Services</h2>
                         <section className="card" aria-labelledby="services-heading">
                            <h3 id="services-heading" className="visually-hidden">Our Core Services</h3>
                            <div className="two-col-grid">
                                <div className="service-item">
                                    <i className="ri-flashlight-line"></i>
                                    <div>
                                        <h4>Lighting Solutions</h4>
                                        <p>Energy-efficient LED lighting for commercial, industrial, and residential projects.</p>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <i className="ri-plug-line"></i>
                                    <div>
                                        <h4>Wiring & Cabling</h4>
                                        <p>A complete range of industrial-grade cables, conduits, and wiring accessories.</p>
                                    </div>
                                </div>
                                 <div className="service-item">
                                    <i className="ri-shield-check-line"></i>
                                    <div>
                                        <h4>Safety & Circuit Protection</h4>
                                        <p>Top-tier circuit breakers, switchgear, and panels to ensure system safety.</p>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <i className="ri-bar-chart-horizontal-line"></i>
                                    <div>
                                        <h4>Power Distribution</h4>
                                        <p>Reliable transformers, busbars, and distribution boards for efficient power management.</p>
                                    </div>
                                </div>
                            </div>
                         </section>
                    </div>

                    <div>
                        <h2 className="section-title">Why Choose Us?</h2>
                        <div className="grid-container three-col-grid">
                            <div className="card feature-item">
                                <i className="ri-shield-star-line"></i>
                                <div>
                                    <h4>Quality Assurance</h4>
                                    <p>We source only the highest-grade equipment from trusted manufacturers, ensuring reliability and safety.</p>
                                </div>
                            </div>
                             <div className="card feature-item">
                                <i className="ri-team-line"></i>
                                <div>
                                    <h4>Expert Guidance</h4>
                                    <p>Our experienced team provides professional advice to help you select the perfect products for your needs.</p>
                                </div>
                            </div>
                             <div className="card feature-item">
                                <i className="ri-truck-line"></i>
                                <div>
                                    <h4>Timely Delivery</h4>
                                    <p>We understand project deadlines. Count on us for prompt and dependable delivery, every time.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="section-title">Get in Touch</h2>
                        <section className="card" aria-labelledby="contact-heading">
                            <h3 id="contact-heading" className="visually-hidden">Contact Information</h3>
                            <ul className="contact-list">
                                <li><i className="ri-map-pin-line"></i> <strong>Address:</strong> <span>Khashra No 948 Morta Raj Nahar extension, Ghaziabad, 201003</span></li>
                                <li><i className="ri-mail-line"></i> <strong>Email:</strong> <span><a href="mailto:namanhai108@gmail.com">namanhai108@gmail.com</a></span></li>
                                <li><i className="ri-phone-line"></i> <strong>Contact:</strong> <span><a href="tel:+917302124747">+91 7302124747</a></span></li>
                                <li><i className="ri-bank-card-line"></i> <strong>PAN:</strong> <span>GBCPP8714H</span></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
            <footer>
                <div className="container">
                    &copy; {new Date().getFullYear()} LevelUp Construction. All Rights Reserved.
                </div>
            </footer>
        </>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}