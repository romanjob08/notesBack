import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class NotesTable implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'notes',
            columns: []
        }))
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('notes')
    }
}