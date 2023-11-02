export interface CardProps {
  id: number;
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggleCompleted: () => void;
  onEdit: () => void;
  isEditing: boolean;
  onSave: (
    id: number,
    updatedTitle: string,
  ) => void;
}

export interface CrossLineProps {
  completed: boolean;
  title?: string;
  description?: string;
}

export interface DisplayButtonProps {
  isEditing: boolean;
}
