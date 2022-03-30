export type Well = {
    name: string;
    type: WellType;
    sourceKey: string;
}

export enum WellType {
    RLS = 'rls',
    ESP = 'esp'
};