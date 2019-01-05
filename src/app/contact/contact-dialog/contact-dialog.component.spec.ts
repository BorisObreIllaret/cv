import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MaterialModule } from '../../core/material.module';
import { ContactDialogComponent } from './contact-dialog.component';

// describe('ContactDialogComponent', () => {
//     let dialog: MatDialog;
//     let overlayContainer: OverlayContainer;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 ContactDialogComponent,
//             ],
//             imports: [
//                 BrowserDynamicTestingModule,
//                 FlexLayoutModule,
//                 MaterialModule,
//             ],
//             providers: [
//                 MatDialog,
//                 MatDialogRef,
//                 MAT_DIALOG_DATA,
//             ]
//         })
//         .compileComponents();
//     }));

//     beforeEach(inject([MatDialog, OverlayContainer],
//         (d: MatDialog, oc: OverlayContainer) => {
//           dialog = d;
//           overlayContainer = oc;
//         })
//     );

//     afterEach(() => {
//         overlayContainer.ngOnDestroy();
//     });

//     it('should open a dialog with a component', () => {
//         const dialogRef = dialog.open(ContactDialogComponent, {
//             data: { email: 'test@test.com', skype: 'skype' }
//         });
    
//         // verify
//         expect(dialogRef.componentInstance instanceof ContactDialogComponent).toBeTruthy();
//       });
// });

// describe('ContactDialogComponent', () => {
//     let component: ContactDialogComponent;
//     let fixture: ComponentFixture<ContactDialogComponent>;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 ContactDialogComponent,
//             ],
//             imports: [
//                 BrowserDynamicTestingModule,
//                 FlexLayoutModule,
//                 MaterialModule,
//             ],
//             providers: [
//                 MatDialog,
//                 MatDialogRef,
//                 MAT_DIALOG_DATA,
//             ]
//         })
//         .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(ContactDialogComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });    

//     it('should create the ContactDialogComponent', () => {
//         expect(component).not.toBeNull();
//     });
// });
