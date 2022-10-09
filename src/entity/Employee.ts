import { Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn, 
	PrimaryColumn} from 'typeorm'

@Entity()
class Employee extends BaseEntity {

    // Relation keys
	@PrimaryGeneratedColumn('increment',
							{
								name:'employee_id',
								type: 'numeric'
							})
    employeeID : number ;

	@Column({
		name: 'budget_id' ,
		type: 'numeric'
	})
	budgetId: number ;
	

	@Column({
		name: 'customer_id' ,
		type: 'numeric'
	})
	customerId: number ;

	@Column({
		name: 'job_id' ,
		type: 'numeric'
	})
	jobId: number ;

	@Column({
		name: 'work_department_id' ,
		type: 'varchar2',
		length: 8
	})
	workDepartmentId: string ;


	//  Attributes columns


	@Column({
		name: 'fingerprint_number' ,
		type: 'numeric',
		precision: 7
	})
	fingerprintNumber: number ;

	@Column({
		name: 'employee_number' ,
		type: 'numeric',
		precision: 7
	})
	employeeNumber: number ;
	
	@Column({
		name: 'remaining_annual_balance' ,
		type: 'numeric',
		precision: 3
	})
	remainingAnnualBalance: number ;
	

	// Lookups
	@Column({
		name: 'employee_status' ,
		type: 'numeric',
		precision: 1
	})
	employeeStatus: number ;

	@Column({
		name: 'employment_type' ,
		type: 'numeric'
	})
	employmentType: number ;
    // end of lookups
	
	
	@Column({
		name: 'government_hire_date' ,
		type: 'varchar2',
		length: 8
	})
	governmentHireDate: string ; 

	@Column({
		name: 'hire_date' ,
		type: 'varchar2',
		length: 8
	})
	hireDate: string ;

	@Column({
		name: 'promotion_date' ,
		type: 'varchar2',
		length: 8
	})
	promotionDate: string ;



	// Audit columns
	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;


}

export { Employee }