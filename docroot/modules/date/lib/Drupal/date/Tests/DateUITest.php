<?php

/**
 * @file
 * Test date UI.
 */
namespace Drupal\date\Tests;

use Drupal\simpletest\WebTestBase;

class DateUITest extends WebTestBase {
  protected $privileged_user;

  /**
   * @todo.
   */
  public static function getInfo() {
    return array(
      'name' => 'Field UI',
      'description' => 'Test creation of various date fields and widgets using Field UI.',
      'group' => 'Date',
    );
  }

  /**
   * Set up required modules.
   */
  public static $modules = array('field', 'field_ui', 'date_api', 'date', 'date_popup', 'date_tools');

  /**
   * @todo.
   */
  public function setUp() {
    parent::setUp();

    // Create and log in our privileged user.
    $this->privileged_user = $this->drupalCreateUser(
      array('administer content types', 'administer nodes', 'bypass node access', 'administer date tools')
    );
    $this->drupalLogin($this->privileged_user);

    variable_set('date_format_long', 'D, m/d/Y - H:i');
  }

  /**
   * @todo.
   */
  public function testFieldUI() {
    $edit = array();
    $edit['name'] = 'Story';
    $edit['type'] = 'story';
    $this->drupalPost('admin/structure/types/add', $edit, t('Save content type'));
    $this->assertText('The content type Story has been added.', 'Content type added.');

    // Creates select list field stored as a date with default settings.
    $this->createDateField($type = 'date', $widget = 'date_select');
    $edit = array();
    $this->drupalPost(NULL, $edit, t('Save field settings'));
    $this->dateForm($options = 'select');
    $this->assertText('Thu, 10/07/2010 - 10:30', 'Found the correct date for a date field using the date_select widget.');
    $this->deleteDateField();
    // Creates popup field stored as a date with default settings.
    $this->createDateField($type = 'date', $widget = 'date_popup');
    $edit = array();
    $this->drupalPost(NULL, $edit, t('Save field settings'));
    $this->dateForm($options = 'popup');
    $this->assertText('Thu, 10/07/2010 - 10:30', 'Found the correct date for a date field using the date_popup widget.');
    $this->deleteDateField();

    // Test timezone handling validation on the field settings form.
    $this->createDateField($type = 'date', $widget = 'date_select');
    $edit = array('field[settings][granularity][hour]' => FALSE);
    $this->drupalPost(NULL, $edit, t('Save field settings'));
    $this->assertText("Dates without hours granularity must not use any timezone handling.", "Dates without hours granularity required to use timezone handling of 'none.'");
    $this->deleteDateField();
  }

  /**
   * @todo.
   */
  function dateForm($options) {
    // Tests that date field functions properly.
    $edit = array();
    $edit['title'] = $this->randomName(8);
    $edit['body[und][0][value]'] = $this->randomName(16);
    if ($options == 'select') {
      $edit['field_test[und][0][value][year]'] = '2010';
      $edit['field_test[und][0][value][month]'] = '10';
      $edit['field_test[und][0][value][day]'] = '7';
      $edit['field_test[und][0][value][hour]'] = '10';
      $edit['field_test[und][0][value][minute]'] = '30';
    }
    elseif ($options == 'popup') {
      $edit['field_test[und][0][value][date]'] = '10/07/2010';
      $edit['field_test[und][0][value][time]'] = '10:30';
    }
    $this->drupalPost('node/add/story', $edit, t('Save'));
    $this->assertText($edit['body[und][0][value]'], 'Test node has been created');
  }

  /**
   * @todo.
   */
  function createDateField($type, $widget) {
    $edit = array();
    $edit['fields[_add_new_field][label]'] = 'Test';
    $edit['fields[_add_new_field][field_name]'] = 'test';
    $edit['fields[_add_new_field][weight]'] = '-4';
    $edit['fields[_add_new_field][type]'] = $type;
    $edit['fields[_add_new_field][widget_type]'] = $widget;
    $this->drupalPost('admin/structure/types/manage/story/fields', $edit, t('Save'));
  }

  /**
   * @todo.
   */
  function deleteDateField() {
    $this->drupalGet('admin/structure/types/manage/story/fields');
    $this->clickLink('delete');
    $this->drupalPost(NULL, NULL, t('Delete'));
    $this->assertText('The field Test has been deleted from the Story content type.', 'Removed date field.');
  }
}
