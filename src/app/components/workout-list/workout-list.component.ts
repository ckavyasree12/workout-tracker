import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
  standalone: true,
  imports:[MatPaginator,MatTableModule]
})
export class WorkoutListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'workoutType', 'minutes'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filterByName: string = '';
  filterByWorkoutType: string = '';


  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    // this.loadData();
    this.workoutService.users$.subscribe(users => {
      this.dataSource.data = users; // Update the table data
      this.dataSource.paginator = this.paginator; // Update paginator
      this.applyFilters();
    });

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // Ensure paginator is set after view initialization
  }

  // loadData() {
  //   this.dataSource.data = this.workoutService.getUsers();
  //   this.dataSource.paginator = this.paginator;
  // }

  applyFilters(): void {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const nameMatch = data.name.toLowerCase().includes(this.filterByName.toLowerCase());
      const workoutTypeMatch = data.workouts.some((workout: any) =>
        workout.type.toLowerCase().includes(this.filterByWorkoutType.toLowerCase())
      );
      return nameMatch && workoutTypeMatch;
    };
    this.dataSource.filter = 'trigger'; // Trigger filtering
  }
  onSearchByName(event: Event): void {
    this.filterByName = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }
  onFilterByWorkoutType(event: Event) {
    this.filterByWorkoutType = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }
}
