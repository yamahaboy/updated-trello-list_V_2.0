export interface CardProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggleCompleted: () => void;
  onEdit: () => void;
  isEditing: boolean;
  onSave: (id: number, updatedTitle: string) => void;
  onUserIdChange: (id: number, newUserId: number) => void;
}

export interface CrossLineProps {
  completed: boolean;
  title?: string;
  description?: string;
}

export interface DisplayButtonProps {
  isEditing: boolean;
}
