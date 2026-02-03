"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import { useState, useEffect } from "react"

const blogPosts: Record<
  string,
  {
    id: number
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    category: string
    image: string
    content: {
      intro: string
      sections: Array<{
        title: string
        content: string
        subsections?: Array<{
          title: string
          content: string
          items?: string[]
        }>
        items?: string[]
        phases?: Array<{
          name: string
          objective: string
          activities: string[]
          results: string
        }>
        successFactors?: string[]
        failureModes?: string[]
      }>
      conclusion: string
    }
  }
> = {
  "1": {
    id: 1,
    title: "How to Implement Value-Based Care: A Strategic Roadmap for Healthcare Organizations",
    excerpt:
      "Value-based care (VBC) is upon us and by 2030, it is projected that every Medicare beneficiary will be in a Value-based Care arrangement.",
    author: "Dr. Ekaette Joseph-Isang",
    date: "December 1, 2024",
    readTime: "15 min read",
    category: "Value-Based Care",
    image: "/healthcare-strategy-meeting-with-charts-and-data-a.jpg",
    content: {
      intro:
        "Value-based care (VBC) is upon us and by 2030, it is projected that every Medicare beneficiary will be in a Value-based Care arrangement. With that in mind, it is important that anybody in the payer-provider space should understand what Value based care is. Value based care aligns provider reimbursement to quality, efficiency and patient outcomes rather than just service volume.",
      sections: [
        {
          title: "Value-Based Care Alignment",
          content: "It aims to align financial incentives with the following three things:",
          items: [
            "Improved clinical performance - This ensures that care is not just provided to boost the volume of services and drive increased reimbursement",
            "Better population health - This allows the provider to gain insight into the health status of their patient panel and allowing them to plan interventions and programs that benefit a majority of their patients",
            "Greater cost containment - This aims to reduce duplicative services through data sharing especially if in a provider network",
          ],
        },
        {
          title: "Medicare VBC Programs",
          content: "Medicare has thus driven VBC adoption through programs such as:",
          items: [
            "Medicare Shared Savings Program (MSSP)",
            "Hospital Readmissions Reduction Program (HRRP)",
            "Hospital Value-Based Purchasing Program (HVBP)",
            "Merit-Based Incentive Payment System (MIPS)",
            "Medicare Advantage risk-adjusted payment models",
          ],
        },
        {
          title: "Implementation Phases",
          content:
            "A deliberate strategic framework is necessary for successful VBC implementation. The following roadmap outlines essential phases and execution priorities for health systems, physician groups and payers seeking to operationalize VBC models.",
          phases: [
            {
              name: "Phase 1: Organizational Readiness and Strategic Alignment",
              objective: "Establish enterprise readiness, leadership commitment and strategic clarity.",
              activities: [
                "Governance and leadership structure",
                "Strategic assessment",
                "Operational maturity assessment",
                "Define enterprise vision and objectives",
              ],
              results:
                "A thorough assessment that asks the right questions and reviews the right parameters will lead to the creation of a unique VBC enterprise strategy.",
            },
            {
              name: "Phase 2: Population Identification, Risk Stratification and Clinical Model Definition",
              objective:
                "Define patient populations and care delivery models aligned to risk-adjusted quality improvement.",
              activities: [
                "Conduct population segmentation",
                "Build risk stratification models",
                "Design preferred care model",
                "Allocate resources by department",
              ],
              results:
                "When conducted properly, Clinical model definition will identify high priority subgroup and develop a roadmap to implement appropriate care models.",
            },
            {
              name: "Phase 3: Physician Alignment, Documentation Integrity and Incentive Integration",
              objective: "Align clinical practice, documentation accuracy and financial incentives.",
              activities: [
                "Engage Physicians and their offices",
                "Clinical documentation integrity (CDI)",
                "Incentive alignment",
                "Performance feedback",
              ],
              results:
                "The result of this session is a physician engagement framework that ultimately improved provider performance as evidenced on scorecards.",
            },
            {
              name: "Phase 4: Technology, Data and Analytics Infrastructure",
              objective:
                "Deploy data and digital capabilities that enable population health management, performance monitoring and predictive analytics.",
              activities: ["Data integration", "Analytics capabilities", "Streamlined Workflows", "Data governance"],
              results:
                "When properly executed, there will be an integrated data warehouse where data can be retrieved to drive decision-making.",
            },
            {
              name: "Phase 5: Execution and Operationalization",
              objective:
                "Operationalize programs to deliver measurable improvements in clinical outcomes, cost reduction and revenue integrity.",
              activities: [
                "Care coordination execution",
                "Utilization and cost management",
                "Quality and safety programs",
                "Continuous documentation and coding integrity",
              ],
              results:
                "This phase produces a fully operational care delivery workflow that can be modified as new policies are announced by the CMS.",
            },
            {
              name: "Phase 6: Performance Measurement, Optimization and Scaling",
              objective: "Measure outcomes, refine strategies and expand VBC maturity.",
              activities: ["Performance monitoring", "Continuous improvement", "Scaling"],
              results:
                "This phase allows for the definition, documentation, and refinement of KPIs along with ongoing monitoring.",
            },
          ],
        },
        {
          title: "Foundational Components Supporting All Phases",
          content: "Several cross-cutting functions support VBC implementation across the continuum of care:",
          items: [
            "Compliance and regulatory oversight, especially for Medicare Advantage risk adjustment and coding integrity",
            "Workforce training in VBC, documentation and care coordination",
            "Financial modeling for contract evaluation and risk tolerance",
            "Vendor management for population health platforms and analytics tools",
            "Patient engagement initiatives to support self-management and adherence",
          ],
        },
        {
          title: "Critical Success Factors",
          content: "Verified drivers of successful VBC execution include:",
          successFactors: [
            "Strong physician engagement and alignment",
            "Accurate clinical documentation and risk coding",
            "Integrated data systems and real-time insights",
            "Evidence-based care protocols and consistent care management",
            "Financial discipline in risk management and cost control",
            "Continuous quality improvement culture",
          ],
          failureModes: [
            "Inadequate data integration and analytic capacity",
            "Insufficient physician buy-in",
            "Poor documentation accuracy leading to risk-score suppression",
            "Fragmented care management structures",
            "Underestimation of capital and operational investment requirements",
          ],
        },
      ],
      conclusion:
        "Value-based care adoption requires structured strategy, disciplined execution and sustained operational focus. Organizations that align governance, data, clinical workflows and physician incentives can achieve improved patient outcomes, reduce utilization and optimize financial performance. The shift from volume-driven to value-driven care delivery remains a long-term transformation requiring progressive capability building across clinical, operational and financial domains.",
    },
  },
  "2": {
    id: 2,
    title: "Outpatient Clinical Documentation Integrity Programs: Ensuring Standards and Quality",
    excerpt:
      "Documentation accuracy is a foundational requirement in value-based care, risk adjustment, quality scoring, and Medicare Advantage operations.",
    author: "Dr. Ekaette Joseph-Isang",
    date: "November 25, 2024",
    readTime: "12 min read",
    category: "Clinical Documentation",
    image: "/medical-professional-reviewing-clinical-documentat.jpg",
    content: {
      intro:
        "Documentation accuracy is a foundational requirement in value-based care, risk adjustment, quality scoring, utilization management and Medicare Advantage operations. Clinical documentation integrity (CDI) programs ensure that clinical information accurately reflects patient diagnoses, severity of illness, risk of mortality and delivered services. CDI influences quality reporting, reimbursement accuracy, compliance, care coordination and population health analytics.",
      sections: [
        {
          title: "Role of CDI in Value-Based Care",
          content: "CDI directly impacts:",
          items: [
            "Hierarchical condition category (HCC) and risk adjustment factor (RAF) accuracy",
            "Accurate reporting of chronic disease prevalence and control",
            "Compliance with official coding and documentation guidelines",
            "Capture of social determinants of health when documented and supported",
            "Appropriate reimbursement for services rendered",
          ],
        },
        {
          title: "Core Principles of CDI",
          content: "Effective CDI programs are built on these core principles:",
          subsections: [
            {
              title: "Clinical Accuracy",
              content:
                "Documentation must reflect the clinical reality of patient conditions, symptoms, severity and care provided. Diagnoses must be supported by clinical indicators and treatment evidence. Final documentation authority resides with the treating provider. CDI supports accuracy but does not create diagnoses.",
            },
            {
              title: "Coding Specificity",
              content:
                "Documentation must support precise coding per ICD-10-CM and official coding guidelines. Avoidance of unspecified diagnoses when clinical specificity exists is essential.",
            },
            {
              title: "Compliance",
              content:
                "All documentation must comply with CMS and regulatory requirements. Clinical validation prevents unsupported diagnoses.",
            },
          ],
        },
        {
          title: "Outpatient Clinical Documentation Review Workflows",
          content: "CDI programs utilize multiple review approaches:",
          subsections: [
            {
              title: "Prospective Reviews",
              content:
                "Reviews that take place ahead of patient visits allowing the flagging of conditions that require provider review.",
            },
            {
              title: "Concurrent Reviews",
              content: "These reviews occur before the provider closes the encounter and submits it for billing.",
            },
            {
              title: "Retrospective Review",
              content:
                "Retrospective reviews occur after claims have been submitted typically for risk adjustment submissions or provider education opportunities.",
            },
          ],
        },
        {
          title: "Technology Infrastructure",
          content: "Efficient clinical documentation relies on integrated solutions:",
          items: [
            "EHR integration with templates for chronic conditions and prompts for precise diagnosis coding",
            "Decision support to guide providers with real-time alerts for missed details",
            "Computer-assisted coding and CDI tools leveraging natural language processing",
            "Analytics for monitoring metrics like case mix index, SOI/ROM trends, HCC capture, query rates, and denial trends",
          ],
        },
        {
          title: "Key Factors for Success",
          content: "Critical success factors for CDI programs:",
          successFactors: [
            "Provider Engagement - Ensure that providers understand value and adopt the standards",
            "Program Integration - Engage with other programs who may overlap with CDI such as quality and utilization management",
            "Performance Measurement - Demonstrate progress to allow for buy-in",
            "Compliance Oversight - Ensure alignment with CMS and other regulatory standards",
          ],
        },
      ],
      conclusion:
        "Clinical documentation integrity programs are operational structures that support accuracy in coded data, acuity representation and regulatory compliance. CDI is required to ensure accurate severity indexing, quality performance measurement and value-based care execution. Organizations prioritizing CDI realize measurable improvements in clinical reporting accuracy, reimbursement integrity and quality performance. Continued integration of CDI into inpatient, outpatient and population health workflows strengthens data reliability and supports long-term value-based care success.",
    },
  },
  "3": {
    id: 3,
    title: "Digital Transformation: Leveraging Technology for Better Health Outcomes",
    excerpt:
      "Digital Innovation represents one of the most profound evolutions in modern industry. Healthcare is rapidly being redefined by data-driven solutions.",
    author: "Dr. Ekaette Joseph-Isang",
    date: "November 18, 2024",
    readTime: "14 min read",
    category: "Healthcare Technology",
    image: "/digital-healthcare-technology-ai-medical-innovatio.jpg",
    content: {
      intro:
        "Digital Innovation represents one of the most profound evolutions in modern industry. Healthcare, once defined by manual workflows and reactive care, is rapidly being redefined by data-driven solutions, real-time analytics, virtual engagement and intelligent automation. This transformation is not just technological but strategic. The integration of digital systems into clinical, administrative and population health domains marks the transition from transactional care delivery to intelligent, connected ecosystems centered on value, quality and efficiency.",
      sections: [
        {
          title: "The Imperative for Digital Transformation",
          content:
            "Healthcare operates at the intersection of medical science, information management and economic stewardship. Key drivers for adopting technology include:",
          items: [
            "Remote patient care capabilities",
            "Breaking of information silos",
            "Data driven decision making",
            "Consumer expectations for digital experiences",
          ],
        },
        {
          title: "Foundations of Digital Healthcare Strategy",
          content: "Building a strong foundation requires:",
          items: [
            "Vision and governance - Define a digital transformation vision aligned with enterprise strategy and value-based objectives",
            "Enterprise readiness assessment - Evaluate IT infrastructure, data governance maturity and interoperability capabilities",
            "Integration with value-based care strategy - Align digital investments with population health management, risk adjustment and quality performance objectives",
            "Data and analytics strategy - Establish standards for data integrity, coding accuracy and interoperability across EHR, payer and analytics systems",
          ],
        },
        {
          title: "Core Technologies Driving Transformation",
          content: "Healthcare's digital transformation rests on several enabling technologies:",
          subsections: [
            {
              title: "Electronic Health Records (EHR) and Interoperability",
              content:
                "EHRs remain the foundational digital system of modern healthcare, centralizing patient data across care settings. The differentiator lies in data liquidity.",
            },
            {
              title: "Data Warehousing and Analytics",
              content:
                "Data warehouses consolidate clinical, claims, financial and operational data to enable performance analytics and predictive modeling.",
            },
            {
              title: "Telehealth and Remote Patient Monitoring (RPM)",
              content:
                "Telehealth extends care delivery beyond physical settings, enabling continuous monitoring and proactive intervention.",
            },
            {
              title: "Internet of Medical Things (IoMT)",
              content:
                "The IoMT ecosystem includes wearable devices, implantables and sensors capturing real-time patient data.",
            },
          ],
        },
        {
          title: "Digital Integration into Clinical Domains",
          content: "Key areas of digital integration include:",
          subsections: [
            {
              title: "Clinical Documentation Integrity (CDI)",
              content:
                "Digitally enabled CDI ensures that diagnoses and procedures are captured with clinical accuracy and coding specificity. Digital enablers include NLP-driven chart reviews, EHR-integrated prompts for chronic condition specificity and AI-assisted CDI tools.",
            },
            {
              title: "Risk Adjustment and Population Health",
              content:
                "Accurate risk adjustment depends on complete and validated diagnosis capture supported by digital data integration. Digital tools enable risk stratification, predictive analytics, automated patient outreach and SDOH data integration.",
            },
            {
              title: "Quality Measurement and Value-Based Care Performance",
              content:
                "Digital systems allow continuous monitoring of performance metrics tied to payer contracts with real-time dashboards, automated alerts and data visualization tools.",
            },
          ],
        },
        {
          title: "Success Drivers",
          content:
            "Technology adoption depends on human integration. Physician engagement remains the single most critical determinant of digital transformation success.",
          successFactors: [
            "Co-design of digital workflows: Involve clinicians in tool selection, configuration and workflow design",
            "Training and support: Provide ongoing education tailored to specialty needs",
            "Feedback loops: Share performance metrics demonstrating the impact of digital tools",
            "Incentive alignment: Integrate digital adoption into performance-based compensation",
            "Burnout mitigation: Ensure technology reduces administrative burden",
          ],
        },
        {
          title: "Barriers to Transformation",
          content: "Common barriers and their mitigation strategies:",
          failureModes: [
            "Fragmented legacy systems - Establish interoperability roadmaps, use middleware integration platforms",
            "Data quality deficiencies - Implement enterprise data governance, audit data integrity",
            "Workforce resistance - Conduct change management programs emphasizing benefits",
            "Financial constraints - Prioritize high-ROI use cases and phased deployment",
            "Cybersecurity threats - Strengthen encryption and continuous threat monitoring",
            "Regulatory uncertainty - Maintain compliance readiness teams",
          ],
        },
        {
          title: "The Future of Digital Healthcare",
          content: "Healthcare's digital future will evolve along several predictable vectors:",
          items: [
            "Precision medicine and genomics integration",
            "Predictive and preventive care ecosystems",
            "Advanced AI and cognitive automation",
            "Full interoperability and data liquidity",
            "Home-based acute care models",
            "Sustainability and green IT initiatives",
            "Augmented reality (AR) and virtual reality (VR) applications",
          ],
        },
      ],
      conclusion:
        "The digital transformation of healthcare is not a future event but an active evolution shaping every aspect of clinical and operational performance. The strategic imperative for healthcare organizations is to harness technology as a precision instrument for improving quality, efficiency and patient outcomes. Success depends on alignment between strategy, technology, and execution. In the digital age, healthcare transformation is no longer optional; it is foundational. The organizations that master digital integration will readily demonstrate measurable outcomes that will define the next era of value-based, patient-centered care.",
    },
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
  }, [])

  const id = mounted && params?.id ? String(params.id) : null
  const post = id ? blogPosts[id] : null

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link href="/blog">
            <Button className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const otherPosts = Object.values(blogPosts).filter((p) => p.id !== post.id)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 ml-96">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{post.category}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-12 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-8">
              <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>

            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">{post.content.intro}</p>

              {/* Sections */}
              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>

                  {/* Regular items list */}
                  {section.items && (
                    <ul className="space-y-3 mt-4">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-6 mt-6">
                      {section.subsections.map((subsection, subIdx) => (
                        <Card key={subIdx} className="border-l-4 border-l-primary">
                          <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{subsection.title}</h3>
                            <p className="text-muted-foreground">{subsection.content}</p>
                            {subsection.items && (
                              <ul className="space-y-2 mt-3">
                                {subsection.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Phases */}
                  {section.phases && (
                    <div className="space-y-6 mt-6">
                      {section.phases.map((phase, phaseIdx) => (
                        <Card key={phaseIdx} className="overflow-hidden">
                          <div className="bg-primary/10 px-6 py-3">
                            <h3 className="font-bold text-foreground">{phase.name}</h3>
                          </div>
                          <CardContent className="p-6">
                            <p className="text-sm font-medium text-primary mb-3">Objective: {phase.objective}</p>
                            <div className="mb-4">
                              <p className="text-sm font-medium text-foreground mb-2">Activities:</p>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {phase.activities.map((activity, actIdx) => (
                                  <li key={actIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-accent/10 rounded-lg p-4">
                              <p className="text-sm">
                                <span className="font-medium text-foreground">Results:</span>{" "}
                                <span className="text-muted-foreground">{phase.results}</span>
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Success Factors */}
                  {section.successFactors && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        Success Factors
                      </h3>
                      <ul className="space-y-2">
                        {section.successFactors.map((factor, factorIdx) => (
                          <li key={factorIdx} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Failure Modes */}
                  {section.failureModes && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                        Common Challenges
                      </h3>
                      <ul className="space-y-2">
                        {section.failureModes.map((mode, modeIdx) => (
                          <li key={modeIdx} className="flex items-start gap-3 text-muted-foreground">
                            <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                            {mode}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Conclusion</h2>
                <p className="text-muted-foreground leading-relaxed">{post.content.conclusion}</p>
              </div>
            </article>

            {/* Author Bio */}
            <Card className="mt-12 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/dr-ekaette-pink-blazer.jpg"
                      alt="Dr. Ekaette Joseph-Isang"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dr. Ekaette Joseph-Isang</h3>
                    <p className="text-sm text-primary font-medium mb-3">MD, MBA, MPH, CPHQ | Healthcare Executive</p>
                    <p className="text-muted-foreground">
                      A healthcare strategy and transformation executive with extensive experience in value-based care,
                      clinical documentation integrity, and healthcare operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <span className="text-xs font-medium text-primary">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Organization?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Schedule a consultation to discuss your healthcare strategy needs.
          </p>
          <Link href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
