import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";



const CommunicationMethodFormModal = ({ isOpen, onClose, method, methods, setMethods }) => {
  const [formData, setFormData] = useState(method || {
    name: '',
    description: '',
    sequence: methods.length + 1,
    mandatory: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method) {
      setMethods(methods.map(m => 
        m.id === method.id ? { ...formData, id: method.id } : m
      ));
    } else {
      setMethods([...methods, { ...formData, id: Date.now() }]);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {method ? 'Edit Communication Method' : 'Add New Communication Method'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Method Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="mt-1"
              placeholder="e.g., LinkedIn Post"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border rounded-md mt-1"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              required
              placeholder="Describe the communication method..."
            />
          </div>

          <div>
            <Label htmlFor="sequence">Sequence</Label>
            <Input
              id="sequence"
              type="number"
              min="1"
              value={formData.sequence}
              onChange={(e) => setFormData({ 
                ...formData, 
                sequence: parseInt(e.target.value) 
              })}
              required
              className="mt-1"
            />
            <p className="text-sm text-gray-500 mt-1">
              Order in which this method should appear in the sequence
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="mandatory"
              checked={formData.mandatory}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, mandatory: checked })
              }
            />
            <Label htmlFor="mandatory">
              Mandatory in communication sequence
            </Label>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {method ? 'Update' : 'Add'} Method
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CommunicationMethodFormModal;