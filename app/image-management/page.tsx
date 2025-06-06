import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { ImageManager } from "@/components/image-manager"
import { ImageMigrationTool } from "@/components/image-migration-tool"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ImageManagementPage() {
  return (
    <>
      <Section className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
        <PageHeader
          title="Image Management"
          description="Monitor, diagnose, and fix image hosting issues across your portfolio"
        />
      </Section>

      <Section>
        <Tabs defaultValue="monitor" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monitor">Image Monitor</TabsTrigger>
            <TabsTrigger value="migration">Migration Tool</TabsTrigger>
          </TabsList>

          <TabsContent value="monitor" className="mt-6">
            <ImageManager />
          </TabsContent>

          <TabsContent value="migration" className="mt-6">
            <ImageMigrationTool />
          </TabsContent>
        </Tabs>
      </Section>
    </>
  )
}
