"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Pencil, Save, X, Upload, Eye } from "lucide-react"

// This component can be used by administrators to manage portfolio section images and content
interface PortfolioSection {
  id: string
  title: string
  description: string
  link: string
  gradient: string
  image: string
  imageAlt: string
}

interface PortfolioSectionManagerProps {
  sections: PortfolioSection[]
  onSectionsUpdate?: (sections: PortfolioSection[]) => void
  isEditable?: boolean
}

export function PortfolioSectionManager({
  sections: initialSections,
  onSectionsUpdate,
  isEditable = false,
}: PortfolioSectionManagerProps) {
  const [sections, setSections] = useState<PortfolioSection[]>(initialSections)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Partial<PortfolioSection>>({})

  const handleEdit = (section: PortfolioSection) => {
    setEditingSection(section.id)
    setEditForm(section)
  }

  const handleSave = () => {
    if (!editingSection || !editForm) return

    const updatedSections = sections.map((section) =>
      section.id === editingSection ? { ...section, ...editForm } : section,
    )

    setSections(updatedSections)
    onSectionsUpdate?.(updatedSections)
    setEditingSection(null)
    setEditForm({})
  }

  const handleCancel = () => {
    setEditingSection(null)
    setEditForm({})
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // In a real implementation, you would upload the file to a server
      // For now, we'll create a local URL
      const imageUrl = URL.createObjectURL(file)
      setEditForm((prev) => ({ ...prev, image: imageUrl }))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Portfolio Section Manager</h2>
        {isEditable && (
          <p className="text-sm text-muted-foreground">
            Click the edit button on any section to modify its content and image
          </p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.id} className="overflow-hidden">
            <CardHeader className={`bg-gradient-to-r ${section.gradient} text-white relative`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {editingSection === section.id ? (
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="title" className="text-white text-sm">
                          Title
                        </Label>
                        <Input
                          id="title"
                          value={editForm.title || ""}
                          onChange={(e) => setEditForm((prev) => ({ ...prev, title: e.target.value }))}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div>
                        <Label htmlFor="description" className="text-white text-sm">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          value={editForm.description || ""}
                          onChange={(e) => setEditForm((prev) => ({ ...prev, description: e.target.value }))}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-[80px]"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      <p className="text-white/90 text-sm mt-2">{section.description}</p>
                    </>
                  )}
                </div>

                {isEditable && (
                  <div className="flex gap-2 ml-4">
                    {editingSection === section.id ? (
                      <>
                        <Button size="sm" variant="secondary" onClick={handleSave} className="h-8 w-8 p-0">
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" onClick={handleCancel} className="h-8 w-8 p-0">
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <Button size="sm" variant="secondary" onClick={() => handleEdit(section)} className="h-8 w-8 p-0">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={editingSection === section.id ? editForm.image || section.image : section.image}
                  alt={editingSection === section.id ? editForm.imageAlt || section.imageAlt : section.imageAlt}
                  fill
                  className="object-cover"
                />

                {editingSection === section.id && isEditable && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`image-${section.id}`} className="text-white">
                          <Button variant="secondary" className="cursor-pointer">
                            <Upload className="h-4 w-4 mr-2" />
                            Upload New Image
                          </Button>
                        </Label>
                        <Input
                          id={`image-${section.id}`}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="imageUrl" className="text-white text-sm">
                          Or enter image URL
                        </Label>
                        <Input
                          id="imageUrl"
                          value={editForm.image || ""}
                          onChange={(e) => setEditForm((prev) => ({ ...prev, image: e.target.value }))}
                          placeholder="https://example.com/image.jpg"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>

                      <div>
                        <Label htmlFor="imageAlt" className="text-white text-sm">
                          Alt Text
                        </Label>
                        <Input
                          id="imageAlt"
                          value={editForm.imageAlt || ""}
                          onChange={(e) => setEditForm((prev) => ({ ...prev, imageAlt: e.target.value }))}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>

            {!isEditable && (
              <div className="p-4">
                <Button variant="outline" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  View Section
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>

      {isEditable && (
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Management Tips:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Images should be high quality and relevant to the section content</li>
            <li>• Recommended image dimensions: 800x600px or 16:9 aspect ratio</li>
            <li>• Alt text should describe the image content for accessibility</li>
            <li>• Keep descriptions concise but informative</li>
            <li>• Changes are saved automatically when you click the save button</li>
          </ul>
        </div>
      )}
    </div>
  )
}
