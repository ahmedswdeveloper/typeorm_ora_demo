import { Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn, 
	PrimaryColumn} from 'typeorm'

    
@Entity()
class Job extends BaseEntity {

    // Relation keys
	@PrimaryGeneratedColumn('increment',
                            {
                                name: 'job_id',
                                type: 'numeric',
                            })
    jobId: number ;

	@Column({
                name: 'budget_id',
                type: 'numeric',
                precision: 3
            })
    budgetId: number ;

	@Column({
        name: 'job_initiation_year',
        type: 'numeric',
        precision: 4,
        nullable: false
    })
    jobInitiationYear: number ;

	@Column({
        name: 'rank_id',
        type: 'numeric',
        precision: 2,
        nullable: false
    })
    rankIid: number ;

	@Column({
        name: 'job_code',
        type: 'numeric',
        precision: 4,
        nullable: false
    })
    jobCode: number ;


	@Column({
        name: 'serial_number',
        type: 'numeric',
        precision: 3,
        nullable: false
    })
    serialNumber: number ;

    
	@Column({
        name: 'job_status',
        type: 'numeric',
        precision: 1,
        nullable: false
    })
    jobStatus: number ;

	@Column({
        name: 'refrence_number',
        type: 'numeric',
        precision: 11,
        nullable: false
    })
    refrenceNumber: number ;
    
    @Column({
        name: 'transaction_id',
        type: 'numeric',
        precision: 2,
        nullable: false
    })
    transactionId: number ;

    @Column({
        name: 'job_department_id',
        type: 'varchar2',
        length: 10,
    })
    jobDepartmentId: string ;


    @Column({
        name: 'job_number',
        type: 'varchar2',
        length: 10,
        
    })
    jobNumber: string ;


    @Column({
        name: 'employment_type',
        type: 'numeric',
        precision: 1,
        nullable: false
    })
    employmentType: number ;

    @Column({
        name: 'unoccupied_date',
        type: 'varchar2',
        precision: 8,
        nullable: false
    })
    unoccupiedDate: string ;

    @Column({
        name: 'join_date',
        type: 'varchar2',
        length: 8
    })
    joinDate: string ;

    @Column({
        name: 'transferred_job_initiation_year',
        type: 'numeric',
        precision: 4
    })
    transferredJobInitiationYear: number ;


    @Column({
        name: 'transferred_rank_id',
        type: 'numeric',
        precision: 2
    })
    transferredRankId: number ;

    @Column({
        name: 'transferred_job_code',
        type: 'numeric',
        precision: 4
    })
    transferredJobCode: number ;
}

export { Job }