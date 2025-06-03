import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function ShadcnDemo() {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">shadcn/ui Demo</h2>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to shadcn/ui</CardTitle>
          <CardDescription>
            Your project is now configured with shadcn/ui components!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Type something here..." />
          <div className="flex gap-2">
            <Button>Default Button</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="destructive" size="sm">
              Destructive
            </Button>
            <Button variant="ghost" size="sm">
              Ghost
            </Button>
            <Button variant="link" size="sm">
              Link
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
