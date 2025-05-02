import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type CardEditFormProps = {
  cardData: {
    name: string;
    title: string;
    email: string;
    link: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardEditForm: React.FC<CardEditFormProps> = ({
  cardData,
  handleInputChange,
}) => (
  <div className="flex-1 p-6 rounded-lg shadow-md text-white">
    <h2 className="text-xl font-semibold mb-4">Edit Your Card</h2>
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={cardData.name}
          onChange={handleInputChange}
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={cardData.title}
          onChange={handleInputChange}
          placeholder="Your job title"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          value={cardData.email}
          onChange={handleInputChange}
          placeholder="your@email.com"
          type="email"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="link">Website/Link</Label>
        <Input
          id="link"
          name="link"
          value={cardData.link}
          onChange={handleInputChange}
          placeholder="yourwebsite.com"
        />
      </div>
      <div className="pt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Click on the card to flip between front and back views
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          All changes are updated in real-time
        </p>
      </div>
    </div>
  </div>
);

export default CardEditForm;
