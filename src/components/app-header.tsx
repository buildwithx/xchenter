import { Search } from 'lucide-react';
import { AppLogo } from './app-logo';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { Link } from 'react-router';
import { Button } from './ui/button';

export function AppHeader() {
  return (
    <header className="bg-neutral fixed top-0 left-0 right-0">
      <div className="container mx-auto h-14 flex items-center justify-between">
        {/* Logo and Search bar */}
        <div className="flex items-center gap-x-3">
          <AppLogo />
          <InputGroup className="border-neutral-700">
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search something..." />
          </InputGroup>
        </div>

        {/* Navigation and Buttons */}
        <div className="flex items-center gap-x-3">
          <Button variant="outline-gradient">
            <Link to="/membership">Become Member</Link>
          </Button>
          <Button asChild>
            <Link to="/sign-in">Join Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
