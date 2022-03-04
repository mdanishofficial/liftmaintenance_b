import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'managerslist',
    loadChildren: () => import('./managerslist/managerslist.module').then( m => m.ManagerslistPageModule)
  },
  {
    path: 'installation-managers-list',
    loadChildren: () => import('./installation-managers-list/installation-managers-list.module').then( m => m.InstallationManagersListPageModule)
  },
  {
    path: 'billmanagers',
    loadChildren: () => import('./billmanagers/billmanagers.module').then( m => m.BillmanagersPageModule)
  },
  {
    path: 'maintenance-technicians',
    loadChildren: () => import('./maintenance-technicians/maintenance-technicians.module').then( m => m.MaintenanceTechniciansPageModule)
  },
  {
    path: 'repair-technicians',
    loadChildren: () => import('./repair-technicians/repair-technicians.module').then( m => m.RepairTechniciansPageModule)
  },
  {
    path: 'installation-technicians',
    loadChildren: () => import('./installation-technicians/installation-technicians.module').then( m => m.InstallationTechniciansPageModule)
  },
  {
    path: 'total-malfunctions',
    loadChildren: () => import('./total-malfunctions/total-malfunctions.module').then( m => m.TotalMalfunctionsPageModule)
  },
  {
    path: 'current-malfunctions',
    loadChildren: () => import('./current-malfunctions/current-malfunctions.module').then( m => m.CurrentMalfunctionsPageModule)
  },
  {
    path: 'solved-complains',
    loadChildren: () => import('./solved-complains/solved-complains.module').then( m => m.SolvedComplainsPageModule)
  },
  {
    path: 'pending-complains',
    loadChildren: () => import('./pending-complains/pending-complains.module').then( m => m.PendingComplainsPageModule)
  },
  {
    path: 'total-installations',
    loadChildren: () => import('./total-installations/total-installations.module').then( m => m.TotalInstallationsPageModule)
  },
  {
    path: 'total-bills',
    loadChildren: () => import('./total-bills/total-bills.module').then( m => m.TotalBillsPageModule)
  },
  {
    path: 'total-contracts',
    loadChildren: () => import('./total-contracts/total-contracts.module').then( m => m.TotalContractsPageModule)
  },
  {
    path: 'total-clients',
    loadChildren: () => import('./total-clients/total-clients.module').then( m => m.TotalClientsPageModule)
  },
  {
    path: 'current-month-expiring',
    loadChildren: () => import('./current-month-expiring/current-month-expiring.module').then( m => m.CurrentMonthExpiringPageModule)
  },
  {
    path: 'expired-contracts',
    loadChildren: () => import('./expired-contracts/expired-contracts.module').then( m => m.ExpiredContractsPageModule)
  },
  {
    path: 'maintenance-manager-detail',
    loadChildren: () => import('./maintenance-manager-detail/maintenance-manager-detail.module').then( m => m.MaintenanceManagerDetailPageModule)
  },
  {
    path: 'installation-manager-detail',
    loadChildren: () => import('./installation-manager-detail/installation-manager-detail.module').then( m => m.InstallationManagerDetailPageModule)
  },
  {
    path: 'bill-manager-detail',
    loadChildren: () => import('./bill-manager-detail/bill-manager-detail.module').then( m => m.BillManagerDetailPageModule)
  },
  {
    path: 'maintenance-technician-detail',
    loadChildren: () => import('./maintenance-technician-detail/maintenance-technician-detail.module').then( m => m.MaintenanceTechnicianDetailPageModule)
  },
  {
    path: 'repair-technician-detail',
    loadChildren: () => import('./repair-technician-detail/repair-technician-detail.module').then( m => m.RepairTechnicianDetailPageModule)
  },
  {
    path: 'installation-technician-detail',
    loadChildren: () => import('./installation-technician-detail/installation-technician-detail.module').then( m => m.InstallationTechnicianDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
