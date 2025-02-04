import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class WorkoutFormComponent implements OnInit {
  workoutForm: FormGroup;

  constructor(private fb: FormBuilder, private workoutService: WorkoutService) {
    this.workoutForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      minutes: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.workoutForm.valid) {
      const userData = this.workoutService.getUsers();
      const newUser = {
        id: userData.length + 1,
        name: this.workoutForm.value.name,
        workouts: [{
          type: this.workoutForm.value.type,
          minutes: this.workoutForm.value.minutes
        }]
      };
      this.workoutService.addUser(newUser);
      this.workoutForm.reset();
    }
  }
}